import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
  const ctrl = vscode.tests.createTestController('duration-bug', 'duration-bug');
  const parent = ctrl.createTestItem('TestParent', 'Test Parent');
  const testItem1 = ctrl.createTestItem('A', 'A');
  const testItem2 = ctrl.createTestItem('B', 'B');
  (testItem1 as any).sortText = 'B';
  (testItem2 as any).sortText = 'A';
  parent.children.add(testItem1);
  parent.children.add(testItem2);
  ctrl.items.add(parent);
  context.subscriptions.push(ctrl);
}
