import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(),'blogposts')

export function getSortedPostData(){
    const fileName = fs.readdirSync(postDirectory);
    const allpostsData = fileName.map((fileName) =>{
        //Remove md from filename to get id
        const id = fileName.replace(/\.md$/,'');
        //read markdown file as string
        const fullPath = path.join(postDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath,'utf8');
        //use gray-matter to parse the post meta section
        const matterResult  = matter(fileContents);

        const blogPost : BlogPost = {
            id,
            title:  matterResult.data.title,
            date: matterResult.data.date,
        }
        //combine data with id
       return blogPost
    });
    //sort post by date 
    return allpostsData.sort((a,b) => a.date < b.date ? 1 :-1);
}