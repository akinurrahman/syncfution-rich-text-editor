"use client"
import TextEditor from '@/components/TextEditor';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [content, setContent] = useState<string>("");
  console.log(content)

  return (
    <div>
      <TextEditor setContent={setContent}/>
    </div>
  );
};

export default Page;
