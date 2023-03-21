import { Component, Input } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MethodNode } from '@app/models/method-node.model';


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
  @Input() methods: MethodNode[] = []; // initialiser la propriété avec une valeur par défaut

  private _transformer = (node: MethodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.fileName,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatMethodNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener<MethodNode, FlatMethodNode>(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.methods;
  }

  hasChild = (_: number, node: FlatMethodNode) => node.expandable;
}
