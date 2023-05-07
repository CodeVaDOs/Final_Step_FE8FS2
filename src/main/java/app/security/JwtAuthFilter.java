package app.security;

import app.enums.TokenType;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Log4j2
@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

  @Autowired
  private final JwtTokenService tokenService;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    try {
      this.tokenService.extractTokenFromRequest(request)
        .flatMap(t -> this.tokenService.extractClaimsFromToken(t, TokenType.ACCESS))
        .flatMap(this.tokenService::extractIdFromClaims)
        .map(JwtUserDetails::new)
        .map(ud -> new UsernamePasswordAuthenticationToken(ud, null, ud.getAuthorities()))
        .ifPresent((UsernamePasswordAuthenticationToken auth) -> {
          auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
          SecurityContextHolder.getContext().setAuthentication(auth);
        });

      filterChain.doFilter(request, response);
    } catch (Exception e) {
      log.error("Authentication failed with: " + e.getMessage());
    }
  }
}