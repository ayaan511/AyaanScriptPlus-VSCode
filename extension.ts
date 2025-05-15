import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('ayaan.runScript', () => {
    const terminal = vscode.window.createTerminal('AyaanScript+ Runner');
    const activeFile = vscode.window.activeTextEditor?.document.fileName;
    terminal.sendText(`ayaan "${activeFile}"`);
    terminal.show();
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
