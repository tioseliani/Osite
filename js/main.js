//Import Calendar

$(function () {
    $("#datepickerStart").datepicker({ 
          autoclose: true, 
          todayHighlight: true
    }).datepicker('update', new Date());
  });
  $(function () {
    $("#datepickerEnd").datepicker({ 
          autoclose: true, 
          todayHighlight: true
    }).datepicker('update', new Date());
  });

  //Fraud threat score - Semi-Circle Chart

  Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: '<span class="fraud-level">2.3</span><br><span class="fraud-level-desc">Your site received a low number of<br></span><span class="fraud-level-desc">fraud threats</span>',
      align: 'center',
      verticalAlign: 'middle',
      y: 70
    
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '100%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Fraud Percentage',
      innerSize: '92%',
      data: [
        ['', 40],
        ['', 20],
        ['', 40],
        {
          dataLabels: {
            enabled: false
          }
        }
      ]
    }]
  });
  
  //Blocked Fraud Type - Line bar
  
  $('#progressbar1').LineProgressbar({
    percentage: 50
  }); 
  $('#progressbar2').LineProgressbar({
    percentage: 15
  }); 
  $('#progressbar3').LineProgressbar({
    percentage: 30
  }); 
  $('#progressbar4').LineProgressbar({
    percentage: 50
  }); 
  $('#progressbar5').LineProgressbar({
    percentage: 30
  }); 