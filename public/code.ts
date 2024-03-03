// 假设您已经通过 npm 安装了 @figma/plugin-typings
declare function require(moduleName: string): any;


figma.showUI(__html__, { width: 400, height: 300 });

figma.ui.onmessage = msg => {
    if (msg.type === 'select-frame') {
      // 选中Frame后的处理逻辑
      const selectedFrame = figma.currentPage.selection[0];
        
      // 假设我们将Frame的ID发送到UI
      figma.ui.postMessage({ type: 'frame-selected', id: selectedFrame.id });
        figma.notify("请选择一个Frame");
        
        figma.on('selectionchange', () => {
            const selection = figma.currentPage.selection;
            if (selection.length > 0 && selection[0].type === 'FRAME') {
                const frame = selection[0];
                figma.ui.postMessage({ 
                    type: 'frame-selected', 
                    name: frame.name,
                    // 假设已经转换为适当的Base64字符串
                    image: "<BASE64_ENCODED_IMAGE_STRING>" 
                });
                // 获取Frame的缩略图，假设是异步操作
                // frame.exportAsync({ format: 'PNG' }).then(imageData => { ... });
            }
        });
    }
};
