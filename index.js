exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .splitpane_divider {
        background: linear-gradient(135deg, #fc1da7, #fba506) !important;
        border: 0;
      }
      .splitpane_divider_horizontal {
        height: 2px;
        margin: 5px 0;
      }
      .splitpane_divider_vertical {
        width: 2px;
        margin: 0 5px;
      }
    `
  });
}
