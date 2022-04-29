import { motion } from 'framer-motion';
import React from 'react';
import { BsDownload } from 'react-icons/bs';

import { InputContext } from '@/root/context';

// leading-none	line-height: 1;
// leading-tight	line-height: 1.25;
// leading-snug	line-height: 1.375;
// leading-normal	line-height: 1.5;
// leading-relaxed	line-height: 1.625;
// leading-loose	line-height: 2;

export const fontPairs = {
  'Open Sans + PT Sans': {
    title: {
      name: 'Open Sans',
      size: '45px',
      weight: 800,
      lineHeight: 1.25,
    },
    description: {
      name: 'PT Sans',
      size: '20px',
      weight: 400,
      lineHeight: 1.625,
    },
  },
  'Quicksand + Source Sans Pro': {
    title: {
      name: 'Quicksand',
      size: '65px',
      weight: 400,
      lineHeight: 1,
    },
    description: {
      name: 'Source Code Pro',
      size: '16px',
      weight: 400,
      lineHeight: 1.625,
    },
  },
  'Yellowtail + Lato': {
    title: {
      name: 'Yellowtail',
      size: '60px',
      weight: 400,
      lineHeight: 1,
    },
    description: {
      name: 'Lato',
      size: '20px',
      weight: 400,
      lineHeight: 1.625,
    },
  },
  'Yeseva One + Josefin Sans': {
    title: {
      name: 'Yeseva One',
      size: '50px',
      weight: 400,
      lineHeight: 1,
    },
    description: {
      name: 'Josefin Sans',
      size: '18px',
      weight: 400,
      lineHeight: 1.625,
    },
  },
};

export const EditorCanvas = () => {
  const inputState = React.useContext(InputContext);
  const editorRef = React.useRef<HTMLDivElement>(null);

  const downloadHandler = async () => {
    const key = inputState.format as 'Png' | 'Jpeg';

    const { exportComponentAsJPEG, exportComponentAsPNG } = await import(
      'react-component-export-image'
    );

    const formalFun = {
      Png: () =>
        exportComponentAsPNG(editorRef, {
          fileName: 'OpenGrph',
        }),
      Jpeg: () =>
        exportComponentAsJPEG(editorRef, {
          fileName: 'OpenGrph',
        }),
    };

    formalFun[key]();
  };

  return (
    <div className="flex flex-col items-end">
      <button
        className="cursor-pointer p-4 bg-red-500 text-slate-50"
        onClick={() => downloadHandler()}>
        <BsDownload className="h-6 w-6 text-slate-50" />
      </button>
      <div
        ref={editorRef}
        className="w-[1200px] h-[627px] flex justify-between items-center overflow-hidden"
        style={{
          backgroundColor: '#ffffff',
        }}>
        <div
          className="w-1/4 h-full"
          style={{ backgroundColor: '#e9ecef30' }}></div>
        <div className="w-3/4 p-10">
          <motion.h1
            className="w-2/3 leading-snug"
            drag="y"
            style={{
              color: '#212529',
              fontFamily:
                fontPairs[inputState.fontPairs]?.title.name ??
                'Montserrat Alternates',
              fontSize: fontPairs[inputState.fontPairs]?.title.size ?? '38px',
              fontWeight: fontPairs[inputState.fontPairs]?.title.weight ?? 800,
              lineHeight:
                fontPairs[inputState.fontPairs]?.title.lineHeight ?? 1.25,
            }}>
            {inputState.title.substring(0, 70)}
          </motion.h1>
          <motion.p
            className="mt-4 w-5/6"
            drag="y"
            style={{
              color: '#adb5bd',
              fontFamily:
                fontPairs[inputState.fontPairs]?.description.name ??
                'Montserrat Alternates',
              fontSize:
                fontPairs[inputState.fontPairs]?.description.size ?? '16px',
              fontWeight:
                fontPairs[inputState.fontPairs]?.description.weight ?? 400,
              lineHeight:
                fontPairs[inputState.fontPairs]?.description.lineHeight ??
                1.625,
            }}>
            {inputState.description.substring(0, 160)}
          </motion.p>
        </div>
      </div>
    </div>
  );
};