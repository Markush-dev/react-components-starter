import { Box, debounce, makeStyles, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { SimpleTextDef } from './SimpleText';

const useStyles = makeStyles((theme) => ({
  editor: {
    height: 'auto',
    resize: 'none',
    border: 'none',
  },
}));

const initialSimpleTextDef: SimpleTextDef = {
  text: '',
  height: ''
};

export const SimpleTextModifier = (props: {
  setData
}) => {
  const classes = useStyles();
  const [data, setData] = useState<SimpleTextDef>(() => ({
    ...initialSimpleTextDef,
  }));

  const updateProperty = (key: keyof SimpleTextDef, value: any) => {
    setData((prev) => {
      const updated = {
        ...prev,
        [key]: value,
      };
      setData(updated);
      return updated;
    });
  };

  const updateText = debounce((key, v: string) => updateProperty(key, v), 300);

  useEffect(() => {
    setData(data);
    return;
  }, [data]);

  return (
    <Box padding="1rem">
      <TextField
        label="Text"
        name="text"
        style={{ width: '100%' }}
        className={`${classes.editor}`}
        variant="outlined" 
        defaultValue={data.text || ''}
        onChange={(e) => updateText(e.target.name, e.target.value)}
      /> 
      <TextField
        label="Height"
        name="height"
        style={{ width: '100%', marginTop: '1rem' }} 
        className={`${classes.editor}`}
        variant="outlined"
        defaultValue={data.text || ''}
        onChange={(e) => updateText(e.target.name, e.target.value)}
      />
    </Box>
  );
};
