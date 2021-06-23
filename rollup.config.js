import yaml from '@rollup/plugin-yaml';
import html from '@rollup/plugin-html';
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/index.js',
    format: 'umd',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env'
      ]
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__EDIT__': true
    }),
    postcss({
      autoModules: true,
      extensions: ['.css', '.scss'],
      plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
        require('postcss-px-to-viewport')({
          viewportWidth: 750, // 设计稿宽度
          viewportHeight: 1334, // 设计稿高度，可以不指定
          unitPrecision: 3, // px to vw无法整除时，保留几位小数
          viewportUnit: 'vw', // 转换成vw单位
          selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
          minPixelValue: 1, // 小于1px不转换
          mediaQuery: false // 允许媒体查询中转换
        }),
        require('postcss-normalize')(),
      ]
    }),
    resolve(),
    commonjs(),
    typescript(),
    html({
      attributes: { html: { lang: 'zh-cn' } },
      title: 'Mango-Components',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
      ],
    }),
    json(),
    yaml(),
    serve({
      open: true,
      contentBase: 'build',
    }),
    livereload(),
  ]
};