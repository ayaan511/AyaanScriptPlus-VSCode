"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('ayaan.runScript', () => {
        var _a;
        const terminal = vscode.window.createTerminal('AyaanScript+ Runner');
        const activeFile = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.fileName;
        terminal.sendText(`ayaan "${activeFile}"`);
        terminal.show();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
