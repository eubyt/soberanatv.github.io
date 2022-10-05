import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {marked} from 'marked';

const getPageProps = async (page_name: string) => {
	const markdownWithMeta = fs.readFileSync(path.join('page_content', `${page_name}.mdx`), 'utf-8');
	const {data: frontmatter, content} = matter(markdownWithMeta);

	return {
		frontmatter,
		content: marked.parse(content),
	};
};

export {getPageProps};
