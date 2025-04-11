interface Report {
  generate(): void;
}

class SalesReport implements Report {
  body: ReportBody | null;
  type: string;
  url: string;
  toJSON() {
    throw new Error("Method not implemented.");
  }
  generate(): void {
    console.log('Generating sales report...');
  }
}

class InventoryReport implements Report {
  body: ReportBody | null;
  type: string;
  url: string;
  toJSON() {
    throw new Error("Method not implemented.");
  }
  generate(): void {
    console.log('Generating inventory report...');
  }
}

abstract class ReportFactory {
  abstract createReport(): Report;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

class SalesReportFactory extends ReportFactory {
  createReport(): Report {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  createReport(): Report {
    return new InventoryReport();
  }
}

function main () {
  let ReportFactory: ReportFactory;

  const reportType = prompt('What type of report do you want? (1: Sales, 2: Inventory)')

  switch (reportType) {
    case '1':
      ReportFactory = new SalesReportFactory();
      break;
    case '2':
      ReportFactory = new InventoryReportFactory();
      break;
    default:
      throw new Error('Invalid report type')
  }

  ReportFactory.generateReport();


}


main();