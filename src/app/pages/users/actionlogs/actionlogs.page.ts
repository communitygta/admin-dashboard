/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Actionlog } from 'src/app/core/models/Actionlog.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-actionlogs',
  templateUrl: './actionlogs.page.html',
  styleUrls: ['./actionlogs.page.scss'],
})
export class ActionlogsPage implements OnInit {
  result;
  actions = [
    { name: 'create', selected: true },
    { name: 'update', selected: true },
    { name: 'delete', selected: true },
  ];
  initFromDate = new Date().toISOString();
  initToDate = new Date().toISOString();
  from = this.initFromDate;
  to = this.initToDate;
  logs: Array<Actionlog>;
  oriLogs: Array<Actionlog>;
  selectedAction: string;
  filterInput = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getActionlogs().subscribe((res) => {
      this.logs = res;
      this.oriLogs = res;
    });
  }

  onFilter(event) {
    const inputValue = event.target.value || '';
    this.logs = this.oriLogs.filter((log) => {
      let checkSelect = true;
      const selectedActions = this.actions.filter((item) => item.selected);
      checkSelect =
        selectedActions.findIndex((item) => item.name === log.action) > -1;
      return (
        log.user.username.toLowerCase().indexOf(inputValue.toLowerCase()) !==
          -1 && checkSelect
      );
    });
  }

  toggleAction(action) {
    action.selected = !action.selected;
    this.logs = this.oriLogs.filter((log) => {
      let checkSelect = true;
      const selectedActions = this.actions.filter((item) => item.selected);
      checkSelect =
        selectedActions.findIndex((item) => item.name === log.action) > -1;
      return (
        log.user.username
          .toLowerCase()
          .indexOf(this.filterInput.toLowerCase()) !== -1 && checkSelect
      );
    });
  }
}
