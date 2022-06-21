import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextFieldTheme from "../../shared/general/TextFieldTheme";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ProfileTab from "./profile";
import Expertise from "./expertise";
import LocationTab from "./location";
import PriceTab from "./price";

const StyledTabs = styled(Tabs)({
  "& .Mui-selected": {
    color: "#212b36 !important",
  },
  "& .fal": {
    marginRight: 8,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RightPanel = () => {
  const [value, setValue] = useState(0);
  const [tabItem, setTabItem] = useState([
    {
      label: "Profile",
      icon: <i class="fal fa-address-card"></i>,
      component: <ProfileTab />,
    },
    {
      label: "Location",
      icon: <i class="fal fa-map-marked-alt"></i>,
      component: <LocationTab />,
    },
    {
      label: "Expertise",
      icon: <i class="fal fa-trophy-alt"></i>,
      component: <Expertise />,
    },
    // {
    //   label: "Price",
    //   icon: <i class="fal fa-receipt"></i>,
    //   component: <PriceTab />,
    // },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "100%" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabItem.map((value, index) => (
          <Tab
            key={index}
            label={
              <Typography>
                {value.icon} {value.label}
              </Typography>
            }
            {...a11yProps(index)}
          />
        ))}
      </StyledTabs>
      {tabItem.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.component}
        </TabPanel>
      ))}
    </div>
  );
};

export default RightPanel;
