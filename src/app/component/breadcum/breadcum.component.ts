import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET,
} from '@angular/router';

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}
@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.scss'],
})
export class BreadcumComponent implements OnInit {
  public displayBreadcrumbList = [];
  public masterBreadcrumbList = [];
  public route;
  public initialUrl;
  public isHome: boolean = true;

  public breadcrumbs: IBreadcrumb[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';
    //subscribe to the NavigationEnd event

    this.router.events.subscribe((event) => {
      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

    //get the child routes
    let children: ActivatedRoute[] = route.children;

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url,
      };
      breadcrumbs.push(breadcrumb);
      breadcrumbs = breadcrumbs.filter(
        (v, i, a) => a.findIndex((t) => t.label === v.label) === i
      );
      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    //we should never get here, but just in case
    return breadcrumbs;
  }
}
