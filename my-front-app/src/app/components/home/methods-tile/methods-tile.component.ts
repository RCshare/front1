import { Component, Input } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl,NestedTreeControl  } from '@angular/cdk/tree';
import { MethodNode } from '@app/models/method-node.model';
import { MethodService } from '@app/services/methods-service/method-service.service';


interface FlatMethodNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-methods-tile',
  templateUrl: './methods-tile.component.html',
  styleUrls: ['./methods-tile.component.scss']
})
export class MethodsTileComponent {
  treeData: MethodNode[] = [];
  private _transformer = (node: MethodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.fileName,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatMethodNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(private methodService: MethodService) {

    this.dataSource.data = this.treeData;

  }

  ngOnInit() {
    let methods: MethodNode[] = [];
    this.methodService.getAllMethods().subscribe(
      (methods: MethodNode[]) => {
        console.log('Received methods:', methods); // Add this line

        this.treeData = methods;
        this.dataSource.data = this.treeData;

        console.log('this.treeControl =:', this.treeControl); // Add this line

      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  hasChild = (_: number, node: FlatMethodNode) => node.expandable;
}
