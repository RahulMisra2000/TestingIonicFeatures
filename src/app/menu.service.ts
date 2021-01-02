import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private _menuBS = new BehaviorSubject<Menu[]>(null);

  constructor() { }

  clearMenu() {
    this._menuBS.next(null);
  }

  initializeMenu(m: Menu[]) {
    this._menuBS.next(m);
  }

  addToMenu(mItem: Menu) {
    this.menu$.pipe(
      take(1)
    ).subscribe(currentMenu => {
      let c = [...currentMenu];
      c.push(mItem);
      this._menuBS.next(c);
    }
    );

  }

  get menu$(): Observable<Menu[]> {
    return this._menuBS.asObservable()
    .pipe(delay(2000));                       // delay ... mimicing ..just in case we are getting menu details over the Net
  }




}
