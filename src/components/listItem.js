import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ConstructionIcon from '@mui/icons-material/Construction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CarRentalIcon from '@mui/icons-material/CarRental';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon sx={{ fontSize: 30 }}/>
      </ListItemIcon>
      <ListItemText primary="Homepage" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <DirectionsCarIcon sx={{ fontSize: 30 }}/>
      </ListItemIcon>
      <ListItemText primary="Warehouse" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ConstructionIcon sx={{ fontSize: 30 }}/>
      </ListItemIcon>
      <ListItemText primary="Repair schedule" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon sx={{ fontSize: 30 }}/>
      </ListItemIcon>
      <ListItemText primary="Order new car" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon sx={{ fontSize: 30 }}/>
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>

    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);