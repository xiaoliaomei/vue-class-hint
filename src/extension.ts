// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


// 注册事件监听器
const disposable = vscode.window.onDidChangeActiveTextEditor(async (editor) => {
  if (editor) {
		try {
			// 获取当前打开文件的URI
			const uri = editor.document.uri;
			console.log('------url',uri);
			// 读取文件内容
			const content = await vscode.workspace.fs.readFile(uri);
			console.log('-----content.toString()',content.toString());
		} catch (error) {
			console.log('error',error);
		}
    
  }
});


// 当插件被激活时，注册事件监听器
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vue-class-hint" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vue-class-hint.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vue class hint hhh!');
	});
	let Time = vscode.commands.registerCommand('vue-class-hint.Time', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage(`现在北京时间是${new Date()}`);
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(Time);
}

// This method is called when your extension is deactivated
export function deactivate() {
	disposable.dispose();
}
