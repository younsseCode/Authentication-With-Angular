import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(userList: any[], searchText: string): any[] {
    if (!userList) return [];
    if (!searchText) return userList;

    searchText = searchText.toLowerCase();

    return userList.filter(item => {
      return Object.values(item).some(val => 
        String(val).toLowerCase().includes(searchText)
      );
    });
  }


}
