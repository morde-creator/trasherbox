import Grid from '@mui/material/Grid';
import AnalyticsOverviewCard from '@/sections/dashboard/AnalyticsOverviewCard';
import AnalyticsOverviewChart from '@/sections/dashboard/AnalyticsOverviewChart';
import AnalyticsTopRef from '@/sections/dashboard/AnalyticsTopRef';
import ModuleGrid from '@/sections/dashboard/ModuleGrid'; // 👈 nuevo

export default function AnalyticsOverview() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12}>
        <ModuleGrid /> {/* 👈 nuevo grid modular tipo Odoo */}
      </Grid>
      <Grid item xs={12}>
        <AnalyticsOverviewCard />
      </Grid>
      <Grid item xs={12}>
        <AnalyticsOverviewChart />
      </Grid>
      <Grid item xs={12}>
        <AnalyticsTopRef />
      </Grid>
    </Grid>
  );
}
