import React from 'react';
import Dialog from './Dialog';

export default {
  title: 'components|Dialog',
  compoennt: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export const dialog = () => {
  return <Dialog />;
};

dialog.story = {
  name: 'Default',
};
