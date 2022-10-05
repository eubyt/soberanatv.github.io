import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {serialize} from 'next-mdx-remote/serialize';

const getPageProps = async (page_name: string) => {
	const markdownWithMeta = fs.readFileSync(path.join('page_content', `${page_name}.mdx`), 'utf-8');
	const {data: frontmatter, content} = matter(markdownWithMeta);
	const mdxSource = await serialize(content);

	return {
		frontmatter,
		content: mdxSource,
	};
};

export {getPageProps};
