import { Component, AfterViewInit } from '@angular/core';
// Import specific Chart.js components for registration
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-component',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  // Implementing AfterViewInit lifecycle hook to ensure the DOM is loaded before accessing the canvas elements
  ngAfterViewInit(): void {
    // Register all necessary components
    Chart.register(...registerables);
    this.createCharts();
    this.initializeDropdowns();
  }

  private createCharts(): void {
    // Get the 2D context of each canvas element
    const lineChartContext = (document.getElementById('lineChart') as HTMLCanvasElement).getContext('2d');
    const barChartContext = (document.getElementById('barChart') as HTMLCanvasElement).getContext('2d');
    const doughnutChartContext = (document.getElementById('doughnutChart') as HTMLCanvasElement).getContext('2d');

    // Check if each context is available before creating the charts
    if (!lineChartContext || !barChartContext || !doughnutChartContext) {
      console.error('Failed to get canvas context.');
      return;
    }

    // Line Chart Configuration
    const lineChartData: ChartData<'line'> = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Active Users',
          borderColor: '#1d7af3',
          pointBorderColor: '#FFF',
          pointBackgroundColor: '#1d7af3',
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          backgroundColor: 'transparent',
          fill: true,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900],
        },
      ],
    };

    const lineChartOptions: ChartOptions<'line'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 10,
            color: '#1d7af3',
          },
        },
        tooltip: {
          bodySpacing: 4,
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          padding: 10,
        },
      },
      layout: {
        padding: { left: 15, right: 15, top: 15, bottom: 15 },
      },
    };

    const myLineChart = new Chart(lineChartContext, {
      type: 'line',
      data: lineChartData,
      options: lineChartOptions,
    });

    // Bar Chart Configuration
    const barChartData: ChartData<'bar'> = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: 'rgb(23, 125, 255)',
          borderColor: 'rgb(23, 125, 255)',
          data: [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
        },
      ],
    };

    const barChartOptions: ChartOptions<'bar'> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const myBarChart = new Chart(barChartContext, {
      type: 'bar',
      data: barChartData,
      options: barChartOptions,
    });

    // Doughnut Chart Configuration
    const doughnutChartData: ChartData<'doughnut'> = {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ['#f3545d', '#fdaf4b', '#1d7af3'],
        },
      ],
      labels: ['Red', 'Yellow', 'Blue'],
    };

    const doughnutChartOptions: ChartOptions<'doughnut'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        },
      },
    };

    const myDoughnutChart = new Chart(doughnutChartContext, {
      type: 'doughnut',
      data: doughnutChartData,
      options: doughnutChartOptions,
    });
  }

  private initializeDropdowns(): void {
    // Toggle the dropdown menu on button click
    document.querySelectorAll('.dropdown-toggle').forEach(button => {
      button.addEventListener('click', (event: Event) => {
        // Cast the event to MouseEvent
        const mouseEvent = event as MouseEvent;

        // Prevent event bubbling to the window click listener
        mouseEvent.stopPropagation();

        // Toggle the current dropdown
        (mouseEvent.currentTarget as HTMLElement).parentElement?.classList.toggle('show');

        // Close other open dropdowns
        document.querySelectorAll('.dropdown').forEach(dropdown => {
          if (dropdown !== (mouseEvent.currentTarget as HTMLElement).parentElement && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
          }
        });
      });
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event: MouseEvent) => {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      });
    });
  }
}
