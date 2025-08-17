export default {
  title: 'Example/Button',
};

export const Primary = {
  render: () => `
    <button style="padding: 10px 20px; background: blue; color: white; border: none; border-radius: 5px;">
      Primary Button
    </button>
  `,
};

export const Secondary = {
  render: () => `
    <button style="padding: 10px 20px; background: gray; color: white; border: none; border-radius: 5px;">
      Secondary Button
    </button>
  `,
};
