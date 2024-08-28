import { CellEditingStoppedEvent, ColDef, GridReadyEvent, ModuleRegistry, RowClassParams, RowStyle, ValueFormatterParams } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { DecisionService } from '../decision-service.service';

interface IRow {
  option?: string;
}

@Component({
  selector: 'app-decision-options-page',
  templateUrl: './decision-options.component.html',
  styleUrl: './decision-options.component.css'
})

export class DecisionOptionsComponent implements OnInit {

  decision_point: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    ModuleRegistry.registerModules([ClientSideRowModelModule]);
    this.decision_point = DecisionService.decision_point;
  }

  rowData: IRow[] = [];
  colDefs: ColDef[] = [
    { field: "option", headerName: "Options" },
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
    if (params.value !== null && params.value !== undefined && params.value !== '' && this.rowData.find(data => data.option === params.value) === undefined)
    {
      this.rowData = [...this.rowData, this.inputRow];
    }
    this.inputRow = {};
    this.pinnedTopRowData = [this.inputRow];
    this.rowData = this.rowData.filter(data => data.option !== undefined && data.option !== null && data.option !== '');
    DecisionService.decision_options = this.rowData.map(row => String(row.option));
  }
  
  onGridReady(params: GridReadyEvent<IRow>) {
    DecisionService.decision_options.forEach(option => {
      let row: IRow = {option: option };
      this.rowData = [...this.rowData, row];
    });
  }

  private isEmptyPinnedCell({ node, value }: ValueFormatterParams): boolean {
    return (
      (node!.rowPinned === 'top' && (value == null || value === '' || value === undefined))
    );
  }

  private createPinnedCellPlaceholder(): string {
    return 'type option here';
  }

  getRowStyle = ({ node }: RowClassParams): RowStyle =>
    node.rowPinned ? { fontWeight: 'bold', fontStyle: 'italic' } : {};

  submit() {
    this.router.navigate(['/decision_points']);
  }

  cantGoForward(): boolean {
    return DecisionService.decision_options.length === 0;
  }
}
