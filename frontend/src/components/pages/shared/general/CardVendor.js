import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Chip, Typography, IconButton, Box, Avatar, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import utils from "../../../../utils";

const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 20,
  padding: "20px 0",
  "& .header": {
    display: "flex",
    justifyContent: "space-between",
  },
  "&:hover": {
    backgroundColor: "#FFFFFF",
    boxShadow: "rgb(145 158 171 / 24%) -24px 24px 72px -8px",
  },
  "& .MuiAvatar-root": {
    width: 180,
    height: 150,
    marginBottom: 16,
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  "& .MuiTypography-h6": {
    fontSize: 22,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 280,
  },
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const StyledChip = styled(Chip)({
  backgroundColor: "#919eab1f",
  borderRadius: 8,
  color: "#637381",
});

const StyledRating = styled(Rating)({
  marginTop: 8,
  "& .MuiRating-iconFilled": {
    color: "#ffc81a",
  },
  "& .MuiRating-iconHover": {
    color: "#ffc81a",
  },
});

const CardVendor = (props) => {
  const { value } = props;
  const [favorite, setFavorite] = useState(false);

  return (
    <StyledContent>
      <div style={{ width: "80%" }}>
        <div className="header">
          <StyledChip
            label={
              <Typography>
                <i class="fa-regular fa-users" style={{ marginRight: 8 }}></i>
                {utils.numberWithCommas(value.amount)}
              </Typography>
            }
          />
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => setFavorite(!favorite)}
          >
            {favorite ? (
              <FavoriteIcon fontSize="small" style={{ color: "#fe4842" }} />
            ) : (
              <FavoriteBorderIcon fontSize="small" />
            )}
          </IconButton>
        </div>
      </div>
      <Avatar variant="rounded" src={value.image} />
      <Typography variant="h6" align="center" gutterBottom>
        {value.name}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        gutterBottom
      >{`ระดับ ${value.level}`}</Typography>
      <StyledRating
        readOnly
        name="customized-color"
        defaultValue={2}
        precision={1}
        icon={<i class="fa-solid fa-star"></i>}
        emptyIcon={<i class="fa-duotone fa-star"></i>}
      />
    </StyledContent>
  );
};

export default CardVendor;
