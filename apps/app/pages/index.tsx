import { Box } from '@material-ui/core';
import { useState } from 'react';
import { SimpleText, SimpleTextDef } from '../components/SimpleText';
import { SimpleTextModifier } from '../components/SimpleTextModifier';

export const Index = () => {
  const [data, setData] = useState<SimpleTextDef>();

  console.log(data)

  return (
    <Box>
      <SimpleTextModifier setData={setData} onDataChanged={(e) => setData(e)} />
      <SimpleText data={data} />
    </Box>
  );
};

export default Index;
