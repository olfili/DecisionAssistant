import { CellEditingStoppedEvent, ColDef, GridReadyEvent, ModuleRegistry, RowClassParams, RowStyle, ValueFormatterParams } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { DecisionService } from '../decision-service.service';

interface IRow {
  point?: string;
}

@Component({
  selector: 'app-decision-points',
  templateUrl: './decision-points.component.html',
  styleUrl: './decision-points.component.css'
})

export class DecisionPointsComponent implements OnInit {

  decision_point: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    ModuleRegistry.registerModules([ClientSideRowModelModule]);
    this.decision_point = DecisionService.decision_point;
  }

  rowData: IRow[] = [];
  colDefs: ColDef[] = [
    { field: "point", headerName: "Decision points" },
  ];
  inputRow : {} = {};
  pinnedTopRowData = [this.inputRow];
  defaultColDef: ColDef = {
    flex: 1,
    editable: true,
    valueFormatter: (params: ValueFormatterParams): any =>
      this.isEmptyPinnedCell(params)
        ? this.createPinnedCellPlaceholder()
        : undefined,
    sortable: false,    
  };

  onCellEditingStopped(params: CellEditingStoppedEvent) {
    if (params.value !== null && params.value !== undefined && params.value !== '' && this.rowData.find(data => data.point === params.value) === undefined)
    {
      this.rowData = [...this.rowData, this.inputRow];
    }
    this.inputRow = {};
    this.pinnedTopRowData = [this.inputRow];
    this.rowData = this.rowData.filter(data => data.point !== undefined && data.point !== null && data.point !== '');
    DecisionService.decision_points = this.rowData.map(row => String(row.point));
  }
  
  onGridReady(params: GridReadyEvent<IRow>) {
    DecisionService.decision_points.forEach(point => {
      let row: IRow = {point: point };
      this.rowData = [...this.rowData, row];
    });
  }

  private isEmptyPinnedCell({ node, value }: ValueFormatterParams): boolean {
    return (
      (node!.rowPinned === 'top' && (value == null || value === '' || value === undefined))
    );
  }

  private createPinnedCellPlaceholder(): string {
    return 'type decision point here';
  }

  getRowStyle = ({ node }: RowClassParams): RowStyle =>
    node.rowPinned ? { fontWeight: 'bold', fontStyle: 'italic' } : {};

  submit() {
    this.router.navigate(['/decision_points_assessments']);
  }

  cantGoForward(): boolean {
    return DecisionService.decision_points.length === 0;
  }
}