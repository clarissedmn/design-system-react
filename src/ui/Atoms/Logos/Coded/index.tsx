import * as React from 'react';
import colors from '../../../../ui/colors.scss';

const imgRatio = 1;
const defaultSize = {
  width: '10px',
  height: '10px',
};

interface Props {
  /** The width of the `svg` element */
  width?: number;
  /** The height of the `svg` element */
  height?: number;
  /** The information that describe the `svg` element  */
  text: string;
  /** Define the color used to paint the `svg` element	 */
  white?: string;
}


export default function CodedLogo({ width, height, text, white, ...restProps }: Props) {
  let svgWidth = defaultSize.width;
  let svgHeight = defaultSize.height;

  if (width) {
    svgWidth = `${width}px`;
    svgHeight = `${width / imgRatio}px`;
  }

  if (height) {
    svgHeight = `${height}px`;
    svgWidth = `${height * imgRatio}px`;
  }

  const whiteColor = colors.lightest;

  return white ? (
    <div>
      <svg
        role="link"
        preserveAspectRatio="xMidYMid meet"
        width={svgWidth}
        height={svgHeight}
        id="prefix__Logo2_white"
        x={0}
        y={0}
        viewBox="0 0 608.03 392.81"
        xmlSpace="preserve"
        {...restProps}
      >
        <a href="https://octo.com">
          <text opacity="0">`${text}`</text>
        </a>
        <style>{`.prefix__st8{fill:${whiteColor}}`}</style>
        <path
          aria-hidden="true"
          className="prefix__st8"
          d="M244.63 126.97c-11.43-6.79-19.11-19.26-19.11-33.49s7.68-26.7 19.11-33.5V24.69c-29.86 8.62-51.77 36.19-51.77 68.78 0 32.6 21.91 60.16 51.77 68.78v-35.28z"
        />
        <path
          aria-hidden="true"
          className="prefix__st8"
          d="M519.67 1.44c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56.01-10.07-4.49-10.08-10.05-.01-5.57 4.49-10.08 10.05-10.08zM519.61 58.06c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56 0-10.07-4.5-10.07-10.05-.01-5.56 4.48-10.07 10.04-10.08z"
        />
        <path
          aria-hidden="true"
          className="prefix__st8"
          d="M88.94 77.7c-8.81 0-15.95 7.18-15.95 16.02 0 8.85 7.14 16.02 15.96 16.02 8.81 0 15.95-7.17 15.95-16.03 0-8.84-7.15-16.01-15.96-16.01zm.01 28.27c-6.74.01-12.2-5.48-12.2-12.24 0-6.77 5.45-12.25 12.19-12.25 6.73 0 12.19 5.48 12.19 12.24.01 6.77-5.45 12.25-12.18 12.25z"
        />
        <path
          aria-hidden="true"
          className="prefix__st8"
          d="M127.85 93.57c0 21.79-17.69 39.52-39.43 39.52s-39.43-17.73-39.43-39.52c0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52zM88.41 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22z"
        />
        <path
          aria-hidden="true"
          className="prefix__st8"
          d="M89.05 85.81c4.36 0 7.9 3.54 7.9 7.92 0 4.37-3.54 7.92-7.9 7.91-4.36 0-7.9-3.54-7.9-7.91 0-4.38 3.54-7.92 7.9-7.92z"
        />
        <g aria-hidden="true">
          <path
            aria-hidden="true"
            className="prefix__st8"
            d="M519.65 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22zm0 107.74c-21.74 0-39.43-17.73-39.43-39.52 0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52c.01 21.79-17.68 39.52-39.43 39.52z"
          />
        </g>
        <path
          aria-hidden="true"
          className="prefix__st8"
          d="M362.13 77.53V24.97h-32.11v52.56h-53.04v31.82h53.04v52.56h32.11v-52.56h53.05V77.53h-53.05z"
        />
        <g aria-hidden="true">
          <path
            aria-hidden="true"
            className="prefix__st8"
            d="M37.7 320.41h15.51l17.05 52.29H57.84l-3.6-11.63H35.2l-3.6 11.63H20.43l17.27-52.29zm.07 32.25h13.89l-6.91-22.6-6.98 22.6zM90.62 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95H98.7c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.21.78-4.71 1.15-7.5 1.15zM130.89 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95h-10.07c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.2.78-4.7 1.15-7.5 1.15zM171.46 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93H162.2c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2zM196.16 334.45h10.65v6.07c.98-1.9 2.5-3.53 4.56-4.9 2.06-1.36 4.71-2.05 7.94-2.05 1.91 0 3.65.29 5.22.88s2.94 1.46 4.12 2.63c1.13 1.22 2.01 2.77 2.64 4.65.64 1.88.96 4.08.96 6.62v24.36h-10.66v-22.82c0-2.63-.54-4.57-1.62-5.81-1.08-1.24-2.79-1.87-5.14-1.87-2.3 0-4.21.7-5.74 2.08-1.52 1.39-2.28 3.5-2.28 6.33v22.09h-10.65v-38.26zM253.19 373.43c-4.07 0-7.15-1.01-9.26-3.03-2.11-2.02-3.16-5.04-3.16-9.03v-19.38h-4.92v-7.53h4.92v-8.26h10.59v8.26h8.08v7.53h-8.08v18.43c0 1.51.36 2.64 1.06 3.4.71.76 1.78 1.13 3.2 1.13.78 0 1.51-.06 2.17-.18.66-.12 1.29-.3 1.87-.55v8.19c-.73.24-1.64.48-2.72.7-1.08.21-2.33.32-3.75.32zM275.98 373.5c-1.86 0-3.59-.28-5.18-.84a11.02 11.02 0 01-4.15-2.6c-1.18-1.17-2.09-2.67-2.76-4.5-.66-1.83-.99-3.99-.99-6.47v-24.65h10.59v23.18c0 2.54.56 4.45 1.69 5.74s2.79 1.94 5 1.94c2.25 0 4.15-.7 5.69-2.08 1.55-1.39 2.32-3.5 2.32-6.33v-22.45h10.58v38.25h-10.58v-6c-.98 1.95-2.46 3.57-4.45 4.86-1.99 1.31-4.58 1.95-7.76 1.95zM305.96 334.45h10.65v7.31c1.22-2.58 2.82-4.53 4.78-5.85s4.51-2 7.65-2.05v9.87c-3.97-.05-7.03.66-9.19 2.12-2.16 1.46-3.24 4.02-3.24 7.68v19.16h-10.65v-38.24zM350.79 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93h-27.71c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2z"
          />
          <g aria-hidden="true">
            <path
              aria-hidden="true"
              className="prefix__st8"
              d="M393.89 323.45h12.68c4.11 0 7.69.6 10.74 1.8 3.04 1.2 5.57 2.85 7.58 4.94 2.01 2.09 3.51 4.56 4.5 7.41.98 2.85 1.48 5.94 1.48 9.28v.6c0 3.29-.48 6.39-1.44 9.28-.96 2.89-2.45 5.41-4.46 7.54-2.01 2.14-4.55 3.82-7.62 5.04-3.06 1.22-6.7 1.84-10.9 1.84H393.9v-47.73zm12.42 43.06c3.09 0 5.78-.45 8.08-1.34 2.3-.89 4.23-2.16 5.77-3.81 1.54-1.65 2.71-3.64 3.49-5.99.78-2.34 1.17-4.98 1.17-7.93v-.54c0-2.76-.35-5.29-1.04-7.59-.69-2.3-1.79-4.28-3.29-5.95s-3.42-2.96-5.77-3.88c-2.35-.91-5.18-1.37-8.49-1.37h-6.51v38.39h6.59zM443.81 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.59 1.07-2.62 1.07zm-2.68 7.28h5.57v34.92h-5.57v-34.92zM472.93 383.94c-2.59 0-4.84-.29-6.74-.87s-3.49-1.35-4.76-2.3c-1.27-.96-2.27-2.09-2.99-3.41-.72-1.31-1.19-2.7-1.41-4.17h5.7c.81 4.05 4.18 6.08 10.13 6.08 3.44 0 6.18-.86 8.22-2.57 2.04-1.71 3.05-4.44 3.05-8.18v-5.07c-.49.85-1.15 1.67-1.98 2.47s-1.77 1.5-2.82 2.1c-1.05.6-2.18 1.09-3.39 1.47-1.21.38-2.44.57-3.69.57-2.28 0-4.41-.41-6.37-1.24-1.97-.82-3.66-1.97-5.07-3.44s-2.52-3.21-3.32-5.24c-.8-2.02-1.21-4.24-1.21-6.64v-.47c0-2.36.4-4.6 1.21-6.71.8-2.11 1.92-3.96 3.35-5.54 1.43-1.58 3.15-2.83 5.17-3.74 2.01-.91 4.23-1.37 6.64-1.37 2.95 0 5.34.61 7.18 1.84 1.83 1.22 3.26 2.68 4.29 4.37v-5.61h5.57v32.58c0 2.54-.43 4.75-1.28 6.64-.85 1.89-2.01 3.46-3.49 4.71-1.48 1.25-3.23 2.18-5.27 2.8-2.01.63-4.26.94-6.72.94zm-.07-18.56c1.61 0 3.12-.28 4.53-.83a10.42 10.42 0 003.66-2.39c1.03-1.04 1.83-2.32 2.42-3.85.58-1.53.87-3.26.87-5.21v-.46c0-3.9-1-6.92-2.99-9.06s-4.71-3.22-8.15-3.22c-1.74 0-3.31.31-4.7.93-1.39.62-2.55 1.47-3.49 2.56-.94 1.08-1.67 2.39-2.18 3.92-.51 1.53-.77 3.2-.77 5.01v.53c0 1.9.29 3.6.87 5.08.58 1.48 1.35 2.74 2.31 3.78a9.66 9.66 0 003.42 2.39c1.33.54 2.73.82 4.2.82zM504.6 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.6 1.07-2.62 1.07zm-2.69 7.28h5.57v34.92h-5.57v-34.92zM530.36 371.65c-3.22 0-5.6-.85-7.14-2.54s-2.31-3.92-2.31-6.68v-21.5h-5.03v-4.67h5.03v-7.95h5.57v7.95h8.19v4.67h-8.19v20.96c0 3.38 1.45 5.07 4.36 5.07.89 0 1.68-.07 2.35-.2.67-.13 1.32-.31 1.95-.53v4.67c-.58.22-1.23.4-1.95.53-.73.16-1.67.22-2.83.22zM553.44 371.79c-1.61 0-3.13-.2-4.56-.6-1.43-.4-2.67-1.02-3.72-1.87s-1.88-1.91-2.48-3.21c-.6-1.29-.91-2.83-.91-4.61 0-2 .49-3.69 1.48-5.07.98-1.38 2.29-2.49 3.92-3.34 1.63-.84 3.51-1.46 5.64-1.84a37 37 0 016.54-.57h5.03v-2.52c0-2.79-.58-4.79-1.75-6-1.16-1.22-3.09-1.83-5.77-1.83-4.83 0-7.51 2.07-8.05 6.21h-5.57c.18-2 .68-3.69 1.51-5.07.83-1.38 1.88-2.5 3.15-3.37s2.71-1.49 4.29-1.87c1.59-.38 3.23-.57 4.93-.57 1.65 0 3.26.19 4.83.57 1.57.38 2.93 1.05 4.09 2s2.1 2.24 2.82 3.84 1.07 3.63 1.07 6.08v23.03h-5.57v-4.41c-1.3 1.65-2.8 2.89-4.5 3.74-1.68.85-3.83 1.28-6.42 1.28zm.53-4.41c1.48 0 2.85-.19 4.13-.57 1.27-.38 2.37-.92 3.29-1.64.92-.71 1.64-1.59 2.18-2.64.54-1.04.81-2.24.81-3.57v-4.34h-4.83c-1.75 0-3.37.12-4.86.37-1.5.25-2.8.63-3.89 1.17-1.1.53-1.95 1.24-2.55 2.1s-.91 1.95-.91 3.24c0 1.83.49 3.26 1.48 4.31.97 1.05 2.69 1.57 5.15 1.57zM581.82 319.58h5.63v51.61h-5.63v-51.61z"
            />
          </g>
          <g aria-hidden="true">
            <path
              aria-hidden="true"
              className="prefix__st8"
              d="M221.13 285.5H587.5v3H221.13zM20.58 274.99h8.55c3.08 0 5.32.65 6.72 1.95 1.4 1.3 2.1 3.1 2.1 5.4v.12c0 2.24-.72 3.97-2.16 5.18-1.44 1.21-3.56 1.81-6.36 1.81h-2.07v6.99h-6.78v-21.45zm8.19 9.9c1.82 0 2.73-.8 2.73-2.4v-.12c0-.84-.23-1.43-.68-1.79-.45-.35-1.12-.52-2.02-.52h-1.44v4.83h1.41zM51.87 274.99h8.79l6.72 21.45h-7.2l-.99-3.57h-6.78l-.96 3.57h-6.33l6.75-21.45zm1.83 13.26h4.23l-2.1-7.77-2.13 7.77zM77.4 274.99h8.76c2.98 0 5.22.58 6.72 1.75s2.25 2.91 2.25 5.21v.12c0 1.48-.34 2.67-1.02 3.55-.68.89-1.55 1.58-2.61 2.06l4.89 8.76h-7.14l-3.99-7.35h-1.08v7.35H77.4v-21.45zm8.37 9.72c1.86 0 2.79-.78 2.79-2.34v-.12c0-.78-.23-1.33-.69-1.67-.46-.33-1.15-.49-2.07-.49h-1.62v4.62h1.59zM109.95 280.21h-5.4v-5.22h17.67v5.22h-5.43v16.23h-6.84v-16.23zM156.12 296.83c-1.76 0-3.34-.26-4.74-.79-1.4-.53-2.59-1.28-3.57-2.25s-1.73-2.13-2.25-3.48-.78-2.83-.78-4.46v-.24c0-1.66.29-3.17.88-4.51.59-1.35 1.4-2.5 2.43-3.45 1.03-.95 2.24-1.68 3.64-2.21 1.4-.52 2.9-.78 4.5-.78 1.64 0 3.17.25 4.58.74s2.63 1.2 3.66 2.12c1.03.92 1.83 2.04 2.42 3.38s.87 2.84.87 4.54v.24c0 1.68-.28 3.21-.83 4.57-.55 1.37-1.33 2.54-2.36 3.51-1.02.97-2.25 1.72-3.67 2.26s-3.02.81-4.78.81zm.18-5.34c1.34 0 2.4-.5 3.19-1.48.79-.99 1.19-2.39 1.19-4.19v-.24c0-1.82-.4-3.21-1.2-4.17s-1.88-1.44-3.24-1.44c-1.32 0-2.38.47-3.17 1.42s-1.18 2.34-1.18 4.18v.24c0 1.84.39 3.25 1.18 4.21.79.98 1.87 1.47 3.23 1.47zM178.32 274.99h14.85v5.22h-8.04v4.02h6.48v5.01h-6.48v7.2h-6.81v-21.45z"
            />
          </g>
          <g aria-hidden="true">
            <path
              aria-hidden="true"
              className="prefix__st8"
              d="M30.24 203.75h-9.7v-6.62h26.88v6.62h-9.7v27.36h-7.49v-27.36zM157.54 215.32c-.35-.51-.85-.94-1.49-1.27-.64-.34-1.33-.5-2.06-.5-1.82 0-3.24.54-4.25 1.63s-1.51 2.51-1.51 4.27.5 3.18 1.51 4.27c1.01 1.09 2.42 1.63 4.25 1.63.8 0 1.49-.18 2.06-.53.58-.35 1.07-.77 1.49-1.25l4.75 4.99c-1.12 1.15-2.44 1.96-3.96 2.42s-2.97.7-4.34.7c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.38 0 2.82.23 4.34.7s2.84 1.27 3.96 2.42l-4.75 4.98zM206.69 194.82v16.13h.1c.16-.45.43-.9.82-1.34.38-.45.85-.85 1.39-1.2.54-.35 1.18-.64 1.92-.86.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-36.29h7.18zM261.65 207.78h6.91v3.17h.1c.22-.45.54-.9.96-1.34.42-.45.91-.85 1.49-1.2s1.23-.64 1.97-.86c.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-23.33zM322.94 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86 3.48.29 5.06.86 2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04a11.55 11.55 0 01-2.76 3.86c-1.17 1.07-2.54 1.9-4.13 2.47s-3.27.86-5.06.86-3.48-.29-5.06-.86-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63s3.24-.54 4.25-1.63c1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27-2.42-1.63-4.25-1.63-3.24.54-4.25 1.63-1.51 2.51-1.51 4.27zM387.79 194.82h7.2v36.29h-7.2v-36.29zM433.92 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63 1.82 0 3.24-.54 4.25-1.63 1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27c-1.01-1.09-2.42-1.63-4.25-1.63-1.82 0-3.24.54-4.25 1.63-1.01 1.08-1.51 2.51-1.51 4.27zM576.96 234.9a50.61 50.61 0 01-1.39 3.31c-.45.96-1.02 1.77-1.7 2.42-.69.66-1.56 1.15-2.62 1.49-1.06.34-2.45.5-4.18.5-1.86 0-3.65-.29-5.38-.86l.96-5.9c1.09.48 2.21.72 3.36.72.8 0 1.46-.09 1.97-.26.51-.18.94-.43 1.27-.77.34-.34.62-.74.84-1.22.22-.48.46-1.04.72-1.68l.53-1.34-10.22-23.52h7.78l6 15.41h.1l5.14-15.41h7.39l-10.57 27.11zM497.81 207.78h6.62v3.07h.1c.29-.42.67-.84 1.15-1.27.48-.43 1.06-.82 1.73-1.18.67-.35 1.43-.64 2.28-.86.85-.22 1.78-.34 2.81-.34 1.66 0 3.15.34 4.46 1.03s2.42 1.59 3.34 2.71c.91 1.12 1.62 2.42 2.11 3.89.5 1.47.74 2.98.74 4.51 0 1.76-.27 3.38-.82 4.85-.54 1.47-1.32 2.74-2.33 3.82a10.62 10.62 0 01-3.62 2.5c-1.41.59-2.98.89-4.7.89-1.09 0-2.25-.23-3.48-.7-1.23-.46-2.26-1.26-3.1-2.38h-.1v2.26c0 1.66.52 3.03 1.56 4.1 1.04 1.07 2.66 1.61 4.87 1.61 1.47 0 2.82-.27 4.06-.82 1.23-.54 2.41-1.28 3.53-2.21l3.98 5.95c-1.7 1.34-3.55 2.25-5.57 2.71-2.02.46-4.06.7-6.14.7-4.54 0-7.93-1.14-10.15-3.43-2.22-2.29-3.34-5.64-3.34-10.06v-21.35zm17.71 9.34c-.29-.69-.7-1.3-1.22-1.82-.53-.53-1.13-.95-1.82-1.27s-1.45-.48-2.28-.48c-.8 0-1.55.16-2.26.48s-1.32.74-1.85 1.27a5.55 5.55 0 00-1.22 1.82c-.29.69-.43 1.42-.43 2.18 0 .77.14 1.5.43 2.18.29.69.7 1.3 1.22 1.82.53.53 1.14.95 1.85 1.27s1.46.48 2.26.48c.83 0 1.59-.16 2.28-.48s1.3-.74 1.82-1.27c.53-.53.94-1.14 1.22-1.82.29-.69.43-1.42.43-2.18 0-.76-.14-1.49-.43-2.18zM85.01 223.38c.61.83 1.32 1.51 2.14 2.04.82.53 1.82.79 3 .79 1.41 0 2.59-.41 3.55-1.22s1.58-1.91 1.87-3.29h-16.7v-2.26c0-1.86.26-3.54.77-5.04s1.24-2.79 2.18-3.86c.94-1.07 2.1-1.9 3.46-2.47 1.36-.58 2.87-.86 4.54-.86 1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.89 0-3.71-.4-5.47-1.2s-3.22-1.94-4.37-3.41l5.03-3.68zm10.56-6.57c-.03-.58-.17-1.13-.41-1.66a4.32 4.32 0 00-1.01-1.39c-.43-.4-.95-.73-1.56-.98-.61-.26-1.31-.38-2.11-.38-1.31 0-2.38.43-3.22 1.3-.83.86-1.23 1.9-1.2 3.12h9.51z"
            />
          </g>
        </g>
      </svg>
    </div>
  ) : (
    <div>
      <svg
        role="link"
        preserveAspectRatio="xMidYMid meet"
        width={svgWidth}
        height={svgHeight}
        id="prefix__Logo2"
        x={0}
        y={0}
        viewBox="0 0 608.03 392.81"
        xmlSpace="preserve"
        {...restProps}
      >
        <a href="https://octo.com">
          <text opacity="0">`${text}`</text>
        </a>
        <style>
          {
            '.prefix__st9{fill:#0e2356}.prefix__st10{fill:#00afcb}.prefix__st11{fill-rule:evenodd;clip-rule:evenodd;fill:#0e2356}.prefix__st12{fill:#1d1d1b}.prefix__st13{fill:#ffb600}'
          }
        </style>
        <path
          aria-hidden="true"
          className="prefix__st9"
          d="M244.63 126.97c-11.43-6.79-19.11-19.26-19.11-33.49s7.68-26.7 19.11-33.5V24.69c-29.86 8.62-51.77 36.19-51.77 68.78 0 32.6 21.91 60.16 51.77 68.78v-35.28z"
        />
        <path
          aria-hidden="true"
          className="prefix__st10"
          d="M519.67 1.44c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56.01-10.07-4.49-10.08-10.05-.01-5.57 4.49-10.08 10.05-10.08zM519.61 58.06c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56 0-10.07-4.5-10.07-10.05-.01-5.56 4.48-10.07 10.04-10.08z"
        />
        <path
          aria-hidden="true"
          className="prefix__st11"
          d="M88.94 77.7c-8.81 0-15.95 7.18-15.95 16.02 0 8.85 7.14 16.02 15.96 16.02 8.81 0 15.95-7.17 15.95-16.03 0-8.84-7.15-16.01-15.96-16.01zm.01 28.27c-6.74.01-12.2-5.48-12.2-12.24 0-6.77 5.45-12.25 12.19-12.25 6.73 0 12.19 5.48 12.19 12.24.01 6.77-5.45 12.25-12.18 12.25z"
        />
        <path
          aria-hidden="true"
          className="prefix__st11"
          d="M127.85 93.57c0 21.79-17.69 39.52-39.43 39.52s-39.43-17.73-39.43-39.52c0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52zM88.41 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22z"
        />
        <path
          aria-hidden="true"
          className="prefix__st9"
          d="M89.05 85.81c4.36 0 7.9 3.54 7.9 7.92 0 4.37-3.54 7.92-7.9 7.91-4.36 0-7.9-3.54-7.9-7.91 0-4.38 3.54-7.92 7.9-7.92z"
        />
        <g aria-hidden="true">
          <path
            aria-hidden="true"
            className="prefix__st11"
            d="M519.65 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22zm0 107.74c-21.74 0-39.43-17.73-39.43-39.52 0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52c.01 21.79-17.68 39.52-39.43 39.52z"
          />
        </g>
        <path
          aria-hidden="true"
          className="prefix__st9"
          d="M362.13 77.53V24.97h-32.11v52.56h-53.04v31.82h53.04v52.56h32.11v-52.56h53.05V77.53h-53.05z"
        />
        <g aria-hidden="true">
          <path
            aria-hidden="true"
            className="prefix__st12"
            d="M37.7 320.41h15.51l17.05 52.29H57.84l-3.6-11.63H35.2l-3.6 11.63H20.43l17.27-52.29zm.07 32.25h13.89l-6.91-22.6-6.98 22.6zM90.62 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95H98.7c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.21.78-4.71 1.15-7.5 1.15zM130.89 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95h-10.07c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.2.78-4.7 1.15-7.5 1.15zM171.46 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93H162.2c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2zM196.16 334.45h10.65v6.07c.98-1.9 2.5-3.53 4.56-4.9 2.06-1.36 4.71-2.05 7.94-2.05 1.91 0 3.65.29 5.22.88s2.94 1.46 4.12 2.63c1.13 1.22 2.01 2.77 2.64 4.65.64 1.88.96 4.08.96 6.62v24.36h-10.66v-22.82c0-2.63-.54-4.57-1.62-5.81-1.08-1.24-2.79-1.87-5.14-1.87-2.3 0-4.21.7-5.74 2.08-1.52 1.39-2.28 3.5-2.28 6.33v22.09h-10.65v-38.26zM253.19 373.43c-4.07 0-7.15-1.01-9.26-3.03-2.11-2.02-3.16-5.04-3.16-9.03v-19.38h-4.92v-7.53h4.92v-8.26h10.59v8.26h8.08v7.53h-8.08v18.43c0 1.51.36 2.64 1.06 3.4.71.76 1.78 1.13 3.2 1.13.78 0 1.51-.06 2.17-.18.66-.12 1.29-.3 1.87-.55v8.19c-.73.24-1.64.48-2.72.7-1.08.21-2.33.32-3.75.32zM275.98 373.5c-1.86 0-3.59-.28-5.18-.84a11.02 11.02 0 01-4.15-2.6c-1.18-1.17-2.09-2.67-2.76-4.5-.66-1.83-.99-3.99-.99-6.47v-24.65h10.59v23.18c0 2.54.56 4.45 1.69 5.74s2.79 1.94 5 1.94c2.25 0 4.15-.7 5.69-2.08 1.55-1.39 2.32-3.5 2.32-6.33v-22.45h10.58v38.25h-10.58v-6c-.98 1.95-2.46 3.57-4.45 4.86-1.99 1.31-4.58 1.95-7.76 1.95zM305.96 334.45h10.65v7.31c1.22-2.58 2.82-4.53 4.78-5.85s4.51-2 7.65-2.05v9.87c-3.97-.05-7.03.66-9.19 2.12-2.16 1.46-3.24 4.02-3.24 7.68v19.16h-10.65v-38.24zM350.79 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93h-27.71c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2z"
          />
          <g aria-hidden="true">
            <path
              aria-hidden="true"
              className="prefix__st13"
              d="M393.89 323.45h12.68c4.11 0 7.69.6 10.74 1.8 3.04 1.2 5.57 2.85 7.58 4.94 2.01 2.09 3.51 4.56 4.5 7.41.98 2.85 1.48 5.94 1.48 9.28v.6c0 3.29-.48 6.39-1.44 9.28-.96 2.89-2.45 5.41-4.46 7.54-2.01 2.14-4.55 3.82-7.62 5.04-3.06 1.22-6.7 1.84-10.9 1.84H393.9v-47.73zm12.42 43.06c3.09 0 5.78-.45 8.08-1.34 2.3-.89 4.23-2.16 5.77-3.81 1.54-1.65 2.71-3.64 3.49-5.99.78-2.34 1.17-4.98 1.17-7.93v-.54c0-2.76-.35-5.29-1.04-7.59-.69-2.3-1.79-4.28-3.29-5.95s-3.42-2.96-5.77-3.88c-2.35-.91-5.18-1.37-8.49-1.37h-6.51v38.39h6.59zM443.81 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.59 1.07-2.62 1.07zm-2.68 7.28h5.57v34.92h-5.57v-34.92zM472.93 383.94c-2.59 0-4.84-.29-6.74-.87s-3.49-1.35-4.76-2.3c-1.27-.96-2.27-2.09-2.99-3.41-.72-1.31-1.19-2.7-1.41-4.17h5.7c.81 4.05 4.18 6.08 10.13 6.08 3.44 0 6.18-.86 8.22-2.57 2.04-1.71 3.05-4.44 3.05-8.18v-5.07c-.49.85-1.15 1.67-1.98 2.47s-1.77 1.5-2.82 2.1c-1.05.6-2.18 1.09-3.39 1.47-1.21.38-2.44.57-3.69.57-2.28 0-4.41-.41-6.37-1.24-1.97-.82-3.66-1.97-5.07-3.44s-2.52-3.21-3.32-5.24c-.8-2.02-1.21-4.24-1.21-6.64v-.47c0-2.36.4-4.6 1.21-6.71.8-2.11 1.92-3.96 3.35-5.54 1.43-1.58 3.15-2.83 5.17-3.74 2.01-.91 4.23-1.37 6.64-1.37 2.95 0 5.34.61 7.18 1.84 1.83 1.22 3.26 2.68 4.29 4.37v-5.61h5.57v32.58c0 2.54-.43 4.75-1.28 6.64-.85 1.89-2.01 3.46-3.49 4.71-1.48 1.25-3.23 2.18-5.27 2.8-2.01.63-4.26.94-6.72.94zm-.07-18.56c1.61 0 3.12-.28 4.53-.83a10.42 10.42 0 003.66-2.39c1.03-1.04 1.83-2.32 2.42-3.85.58-1.53.87-3.26.87-5.21v-.46c0-3.9-1-6.92-2.99-9.06s-4.71-3.22-8.15-3.22c-1.74 0-3.31.31-4.7.93-1.39.62-2.55 1.47-3.49 2.56-.94 1.08-1.67 2.39-2.18 3.92-.51 1.53-.77 3.2-.77 5.01v.53c0 1.9.29 3.6.87 5.08.58 1.48 1.35 2.74 2.31 3.78a9.66 9.66 0 003.42 2.39c1.33.54 2.73.82 4.2.82zM504.6 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.6 1.07-2.62 1.07zm-2.69 7.28h5.57v34.92h-5.57v-34.92zM530.36 371.65c-3.22 0-5.6-.85-7.14-2.54s-2.31-3.92-2.31-6.68v-21.5h-5.03v-4.67h5.03v-7.95h5.57v7.95h8.19v4.67h-8.19v20.96c0 3.38 1.45 5.07 4.36 5.07.89 0 1.68-.07 2.35-.2.67-.13 1.32-.31 1.95-.53v4.67c-.58.22-1.23.4-1.95.53-.73.16-1.67.22-2.83.22zM553.44 371.79c-1.61 0-3.13-.2-4.56-.6-1.43-.4-2.67-1.02-3.72-1.87s-1.88-1.91-2.48-3.21c-.6-1.29-.91-2.83-.91-4.61 0-2 .49-3.69 1.48-5.07.98-1.38 2.29-2.49 3.92-3.34 1.63-.84 3.51-1.46 5.64-1.84a37 37 0 016.54-.57h5.03v-2.52c0-2.79-.58-4.79-1.75-6-1.16-1.22-3.09-1.83-5.77-1.83-4.83 0-7.51 2.07-8.05 6.21h-5.57c.18-2 .68-3.69 1.51-5.07.83-1.38 1.88-2.5 3.15-3.37s2.71-1.49 4.29-1.87c1.59-.38 3.23-.57 4.93-.57 1.65 0 3.26.19 4.83.57 1.57.38 2.93 1.05 4.09 2s2.1 2.24 2.82 3.84 1.07 3.63 1.07 6.08v23.03h-5.57v-4.41c-1.3 1.65-2.8 2.89-4.5 3.74-1.68.85-3.83 1.28-6.42 1.28zm.53-4.41c1.48 0 2.85-.19 4.13-.57 1.27-.38 2.37-.92 3.29-1.64.92-.71 1.64-1.59 2.18-2.64.54-1.04.81-2.24.81-3.57v-4.34h-4.83c-1.75 0-3.37.12-4.86.37-1.5.25-2.8.63-3.89 1.17-1.1.53-1.95 1.24-2.55 2.1s-.91 1.95-.91 3.24c0 1.83.49 3.26 1.48 4.31.97 1.05 2.69 1.57 5.15 1.57zM581.82 319.58h5.63v51.61h-5.63v-51.61z"
            />
          </g>
          <g aria-hidden="true">
            <path
              aria-hidden="true"
              className="prefix__st12"
              d="M221.13 285.5H587.5v3H221.13zM20.58 274.99h8.55c3.08 0 5.32.65 6.72 1.95 1.4 1.3 2.1 3.1 2.1 5.4v.12c0 2.24-.72 3.97-2.16 5.18-1.44 1.21-3.56 1.81-6.36 1.81h-2.07v6.99h-6.78v-21.45zm8.19 9.9c1.82 0 2.73-.8 2.73-2.4v-.12c0-.84-.23-1.43-.68-1.79-.45-.35-1.12-.52-2.02-.52h-1.44v4.83h1.41zM51.87 274.99h8.79l6.72 21.45h-7.2l-.99-3.57h-6.78l-.96 3.57h-6.33l6.75-21.45zm1.83 13.26h4.23l-2.1-7.77-2.13 7.77zM77.4 274.99h8.76c2.98 0 5.22.58 6.72 1.75s2.25 2.91 2.25 5.21v.12c0 1.48-.34 2.67-1.02 3.55-.68.89-1.55 1.58-2.61 2.06l4.89 8.76h-7.14l-3.99-7.35h-1.08v7.35H77.4v-21.45zm8.37 9.72c1.86 0 2.79-.78 2.79-2.34v-.12c0-.78-.23-1.33-.69-1.67-.46-.33-1.15-.49-2.07-.49h-1.62v4.62h1.59zM109.95 280.21h-5.4v-5.22h17.67v5.22h-5.43v16.23h-6.84v-16.23zM156.12 296.83c-1.76 0-3.34-.26-4.74-.79-1.4-.53-2.59-1.28-3.57-2.25s-1.73-2.13-2.25-3.48-.78-2.83-.78-4.46v-.24c0-1.66.29-3.17.88-4.51.59-1.35 1.4-2.5 2.43-3.45 1.03-.95 2.24-1.68 3.64-2.21 1.4-.52 2.9-.78 4.5-.78 1.64 0 3.17.25 4.58.74s2.63 1.2 3.66 2.12c1.03.92 1.83 2.04 2.42 3.38s.87 2.84.87 4.54v.24c0 1.68-.28 3.21-.83 4.57-.55 1.37-1.33 2.54-2.36 3.51-1.02.97-2.25 1.72-3.67 2.26s-3.02.81-4.78.81zm.18-5.34c1.34 0 2.4-.5 3.19-1.48.79-.99 1.19-2.39 1.19-4.19v-.24c0-1.82-.4-3.21-1.2-4.17s-1.88-1.44-3.24-1.44c-1.32 0-2.38.47-3.17 1.42s-1.18 2.34-1.18 4.18v.24c0 1.84.39 3.25 1.18 4.21.79.98 1.87 1.47 3.23 1.47zM178.32 274.99h14.85v5.22h-8.04v4.02h6.48v5.01h-6.48v7.2h-6.81v-21.45z"
            />
          </g>
          <g aria-hidden="true">
            <path
              aria-hidden="true"
              className="prefix__st9"
              d="M30.24 203.75h-9.7v-6.62h26.88v6.62h-9.7v27.36h-7.49v-27.36zM157.54 215.32c-.35-.51-.85-.94-1.49-1.27-.64-.34-1.33-.5-2.06-.5-1.82 0-3.24.54-4.25 1.63s-1.51 2.51-1.51 4.27.5 3.18 1.51 4.27c1.01 1.09 2.42 1.63 4.25 1.63.8 0 1.49-.18 2.06-.53.58-.35 1.07-.77 1.49-1.25l4.75 4.99c-1.12 1.15-2.44 1.96-3.96 2.42s-2.97.7-4.34.7c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.38 0 2.82.23 4.34.7s2.84 1.27 3.96 2.42l-4.75 4.98zM206.69 194.82v16.13h.1c.16-.45.43-.9.82-1.34.38-.45.85-.85 1.39-1.2.54-.35 1.18-.64 1.92-.86.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-36.29h7.18zM261.65 207.78h6.91v3.17h.1c.22-.45.54-.9.96-1.34.42-.45.91-.85 1.49-1.2s1.23-.64 1.97-.86c.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-23.33zM322.94 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86 3.48.29 5.06.86 2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04a11.55 11.55 0 01-2.76 3.86c-1.17 1.07-2.54 1.9-4.13 2.47s-3.27.86-5.06.86-3.48-.29-5.06-.86-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63s3.24-.54 4.25-1.63c1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27-2.42-1.63-4.25-1.63-3.24.54-4.25 1.63-1.51 2.51-1.51 4.27zM387.79 194.82h7.2v36.29h-7.2v-36.29zM433.92 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63 1.82 0 3.24-.54 4.25-1.63 1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27c-1.01-1.09-2.42-1.63-4.25-1.63-1.82 0-3.24.54-4.25 1.63-1.01 1.08-1.51 2.51-1.51 4.27zM576.96 234.9a50.61 50.61 0 01-1.39 3.31c-.45.96-1.02 1.77-1.7 2.42-.69.66-1.56 1.15-2.62 1.49-1.06.34-2.45.5-4.18.5-1.86 0-3.65-.29-5.38-.86l.96-5.9c1.09.48 2.21.72 3.36.72.8 0 1.46-.09 1.97-.26.51-.18.94-.43 1.27-.77.34-.34.62-.74.84-1.22.22-.48.46-1.04.72-1.68l.53-1.34-10.22-23.52h7.78l6 15.41h.1l5.14-15.41h7.39l-10.57 27.11zM497.81 207.78h6.62v3.07h.1c.29-.42.67-.84 1.15-1.27.48-.43 1.06-.82 1.73-1.18.67-.35 1.43-.64 2.28-.86.85-.22 1.78-.34 2.81-.34 1.66 0 3.15.34 4.46 1.03s2.42 1.59 3.34 2.71c.91 1.12 1.62 2.42 2.11 3.89.5 1.47.74 2.98.74 4.51 0 1.76-.27 3.38-.82 4.85-.54 1.47-1.32 2.74-2.33 3.82a10.62 10.62 0 01-3.62 2.5c-1.41.59-2.98.89-4.7.89-1.09 0-2.25-.23-3.48-.7-1.23-.46-2.26-1.26-3.1-2.38h-.1v2.26c0 1.66.52 3.03 1.56 4.1 1.04 1.07 2.66 1.61 4.87 1.61 1.47 0 2.82-.27 4.06-.82 1.23-.54 2.41-1.28 3.53-2.21l3.98 5.95c-1.7 1.34-3.55 2.25-5.57 2.71-2.02.46-4.06.7-6.14.7-4.54 0-7.93-1.14-10.15-3.43-2.22-2.29-3.34-5.64-3.34-10.06v-21.35zm17.71 9.34c-.29-.69-.7-1.3-1.22-1.82-.53-.53-1.13-.95-1.82-1.27s-1.45-.48-2.28-.48c-.8 0-1.55.16-2.26.48s-1.32.74-1.85 1.27a5.55 5.55 0 00-1.22 1.82c-.29.69-.43 1.42-.43 2.18 0 .77.14 1.5.43 2.18.29.69.7 1.3 1.22 1.82.53.53 1.14.95 1.85 1.27s1.46.48 2.26.48c.83 0 1.59-.16 2.28-.48s1.3-.74 1.82-1.27c.53-.53.94-1.14 1.22-1.82.29-.69.43-1.42.43-2.18 0-.76-.14-1.49-.43-2.18zM85.01 223.38c.61.83 1.32 1.51 2.14 2.04.82.53 1.82.79 3 .79 1.41 0 2.59-.41 3.55-1.22s1.58-1.91 1.87-3.29h-16.7v-2.26c0-1.86.26-3.54.77-5.04s1.24-2.79 2.18-3.86c.94-1.07 2.1-1.9 3.46-2.47 1.36-.58 2.87-.86 4.54-.86 1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.89 0-3.71-.4-5.47-1.2s-3.22-1.94-4.37-3.41l5.03-3.68zm10.56-6.57c-.03-.58-.17-1.13-.41-1.66a4.32 4.32 0 00-1.01-1.39c-.43-.4-.95-.73-1.56-.98-.61-.26-1.31-.38-2.11-.38-1.31 0-2.38.43-3.22 1.3-.83.86-1.23 1.9-1.2 3.12h9.51z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
