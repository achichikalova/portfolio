import React from 'react';
import './Skills.scss';
import { GrReactjs, GrNode, GrGithub } from 'react-icons/gr';
import { SiExpress, SiPostgresql, SiHtml5, SiJavascript } from 'react-icons/si';
import { DiSass, DiJqueryLogo, DiNpm, DiCss3Full } from 'react-icons/di';

const Skills = () => {
  return (
    <div className='skills'>
      <GrNode className='icon' title='Node.js' />
      <SiExpress className='icon' title='Express.js' />
      <SiPostgresql className='icon' title='PostgreSQL' />
      <GrGithub className='icon' title='GitHub' />
      <DiCss3Full className='icon' title='CSS3' />
      <SiHtml5 className='icon' title='HTML5' />
      <SiJavascript className='icon' title='JS' />
      <GrReactjs className='icon' title='React.js' />
      <DiSass className='icon' title='Sass' />
      <DiJqueryLogo className='icon' title='jQuery' />
      <DiNpm className='icon' title='npm' />
    </div>
  )
}

export default Skills