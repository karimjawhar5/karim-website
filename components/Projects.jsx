import React from 'react'
import Link from "next/link";
import Image from 'next/image';

import { FaGithub} from 'react-icons/fa';
import {replaceSpacesWithHyphens} from '../pages/api/business'

function ProjectCard ({title, id, summary, techs, image}){
  return (
        <div className='flex space-x-5 bg-gray-100 dark:bg-gray-900 max-w-xl rounded-md my-4  px-4 md:px-6 py-6'>

          <div className='w-1/6'>
            <Image alt={"Page-Cover"} src={image} width={100} height={100} className="w-16 h-14 rounded-xl overflow-hidden object-cover object-center"/>
          </div>

          <div className='w-5/6'>
            <div className="flex">
              <div className='w-3/5'>
                <ul className='flex space-x-2 text-xs mb-2 text-blue-500 dark:text-blue-200 text-left'>
                  {techs.map((tech)=> <li key={tech[1]}><h6>{tech[0]}</h6></li>)}
                </ul>
              </div>

              <div className='w-2/5 text-right'>
                <ul className='flex font-light text-sm space-x-4 text-gray-900 dark:text-gray-300 justify-end mt-1'>
                  <li className='text-right'><Link href={"https://github.com/karimjawhar5/"+replaceSpacesWithHyphens(title)}><FaGithub className="cursor-pointer w-5 h-5"/></Link></li>
                </ul>
              </div>
            </div>

          <Link href={`/projects/${id}`}>
            <h3 className='text-lg text-gray-950 dark:text-gray-100 font-medium mb-1'>{title}</h3>
          </Link>

          <p className='text-xs font-light'>{summary}</p>
          </div>
        </div>
  )
}

export default function Projects({projects, summaries, techs}) {
  return (
    <div>
      <h2 className='mb-6'> My Projects </h2>
      { projects?.map( (project, i) =>(
        <ProjectCard key={project.id} title={project.properties.Name.title[0]?.plain_text || ''} id={project.id} summary={summaries[i]} techs={techs[i]} image={project.cover?.external.url || "/fav.png"}/>
      )
      )}
    </div>
  )
}