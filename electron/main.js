const { app, BrowserWindow, Menu, shell } = require('electron');
const URL_APP = 'https://cqnhietluyen.netlify.app/';

if (!app.requestSingleInstanceLock()) app.quit();

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 860, minWidth: 900, minHeight: 600,
    title: 'CQ Nhiệt Luyện – Oristar',
    backgroundColor: '#17306b',
    autoHideMenuBar: true,
    webPreferences: { partition: 'persist:qcnhietluyen' }
  });
  Menu.setApplicationMenu(null);
  win.loadURL(URL_APP);
  win.webContents.on('did-fail-load', (_e, code) => {
    if (code === -3) return;
    win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(
      '<body style="font-family:sans-serif;text-align:center;padding-top:20vh;background:#17306b;color:#fff">' +
      '<h2>Không có kết nối mạng</h2><p>Hãy kiểm tra Internet rồi bấm Ctrl+R để tải lại.</p></body>'));
  });
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith(URL_APP) || url.startsWith('blob:') || url.startsWith('about:')) return { action: 'allow' };
    shell.openExternal(url); return { action: 'deny' };
  });
  win.webContents.on('before-input-event', (e, i) => {
    if (i.control && i.key.toLowerCase() === 'r') win.reload();
  });
}
app.whenReady().then(createWindow);
app.on('second-instance', () => { const w = BrowserWindow.getAllWindows()[0]; if (w) { if (w.isMinimized()) w.restore(); w.focus(); } });
app.on('window-all-closed', () => app.quit());   
