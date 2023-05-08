import { UserPageFoto } from "./UserPageFoto";
import { UserPageAvatar } from "./UserPageAvatar";
import { ButtonEditProfile } from "./ButtonEditProfile";
import { UserName } from "./UserName";
import { UserDateRegistration } from "./UserDateRegistration";
import { UserFolower } from "./UserFolower";
import { UserNick } from "./UserNIck";
import { Box } from "@mui/material";

export function UserInfo() {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <UserPageFoto />
      <Box
        sx={{
          padding: "11px 15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <UserPageAvatar />
          <ButtonEditProfile />
        </Box>
        <Box sx={{ margin: "12px 0" }}>
          <UserName />
          <UserNick />
        </Box>
        <UserDateRegistration />
        <UserFolower />
      </Box>
    </Box>
  );
}
