import React, { useState, useEffect } from "react";
import StyledCard from "../../shared/general/CardCharts";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import ChartsArea from "./chartsArea";
import ChartsOTType from "./chartsOTType";
import TableChartOTType from "./ot/tableChartOTType";

export default function CardChart(props) {
  const { chartName, max, chart } = props;
  return (
    <StyledCard>
      <CardContent style={{ paddingBottom: 0 }}>
        <Box>
          <Typography variant="h4" className={`cardTitle`} gutterBottom>
            {chartName}
          </Typography>
          <Box style={{ paddingBottom: 20 }}>
            {chart === "area" ? (
              <ChartsArea max={max} />
            ) : (
              <div>
                <ChartsOTType />
                <TableChartOTType />
              </div>
            )}
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
}
