import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { HsTableDataSource } from "./hs-table-datasource";

@Component({
  selector: "hs-table",
  templateUrl: "./hs-table.component.html",
  styleUrls: ["./hs-table.component.scss"]
})
export class HsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: HsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  ngOnInit() {
    this.dataSource = new HsTableDataSource(this.paginator, this.sort);
  }
}
