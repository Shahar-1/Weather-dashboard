// src/components/WeatherWidget.js
import React from 'react';
import WidgetCard1 from './WidgetCard1';
import WidgetCard2 from './WidgetCard2';
import WidgetCard3 from './WidgetCard3';

const DashboardHome = () => {
  return (
    <div>
      <div className="row mx-0">
        <div className="col-lg-8 col-md-12 px-md-5 px-lg-1 col-12 px-sm-5 px-0">
          <WidgetCard1 />
          <WidgetCard2 />
        </div>
        <div className="col-lg-4 col border-start px-sm-5 px-lg-1 px-0">
          {/* <Payment balance={balance} loading={loading} /> */}
          <WidgetCard3 />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
