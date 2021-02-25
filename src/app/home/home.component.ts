import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

export interface checkboxData {
    id: number;
    name: string;
    isShow: boolean;
    class: string;
}

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    isShown: boolean = false ; 

    airbaseData: checkboxData[] = [
        { id: 0, name: 'Airbase 1', isShow:false, class:'airbase-1'},
        { id: 1, name: 'Airbase 2' , isShow:false, class:'airbase-2' },
        { id: 2, name: 'Airbase 3' , isShow:false, class:'airbase-3' },
        { id: 3, name: 'Airbase 4' , isShow:false, class:'airbase-4' }
    ];

    sectorsData: checkboxData[] = [
        { id: 0, name: 'Central', isShow:false, class:'central'},
        { id: 1, name: 'Eastern' , isShow:false, class:'eastern' },
        { id: 2, name: 'Western' , isShow:false, class:'western' },
        { id: 3, name: 'Northern' , isShow:false, class:'northern' },
        { id: 4, name: 'Southern' , isShow:false, class:'southern' },
        { id: 5, name: 'Riyadh' , isShow:false, class:'riyadh' }
    ];

    statusData: checkboxData[] = [
        { id: 0, name: 'Operational', isShow:false, class:'operational'},
        { id: 1, name: 'Non-Operational' , isShow:false, class:'non-operational'},
        { id: 2, name: 'Operational/Degraded' , isShow:false, class:'operational-degraded'},
        { id: 3, name: 'PMI / Training / System Test' , isShow:false, class:'pts'}
    ];

    assetTypeData: checkboxData[] = [
        { id: 0, name: 'FPS-117' , isShow:false, class:'asset-type-1'},
        { id: 1, name: 'TPS-78' , isShow:false, class:'asset-type-2'},
        { id: 2, name: 'GM-200' , isShow:false, class:'asset-type-3'},
        { id: 3, name: 'SCC/SOC' , isShow:false, class:'asset-type-4'},
        { id: 4, name: 'ADOC - Air Defense' , isShow:false, class:'asset-type-5'},
        { id: 5, name: 'GACA' , isShow:false, class:'asset-type-6'},
        { id: 6, name: 'ATC' , isShow:false, class:'asset-type-7'},
        { id: 7, name: 'ATC Tower' , isShow:false, class:'asset-type-8'},
        { id: 8, name: 'Weather Station' , isShow:false, class:'asset-type-9'}
    ];
    

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    onChange(dataArray, isChecked: boolean, id: number) {
        dataArray[id].isShow = isChecked;
    }
    
}