import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
    ArticleBlockType,
    ArticleType,
    ArticleView,
} from '../../model/consts/articleConsts';
import { ArticleList } from './ArticleList';
import { Article } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS in 2023?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Demetrxx',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title of the block',
            paragraphs: [
                'The program, traditionally called «Hello, world!», is very simple. It displays somewhere the phrase «Hello, world!», Or another similar one, using some language.',
                "JavaScript is a language that can run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Title of the block',
            paragraphs: [
                'The program, traditionally called «Hello, world!», is very simple. It displays somewhere the phrase «Hello, world!», Or another similar one, using some language.',
                "JavaScript is a language that can run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
            ],
        },
    ],
};

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const ListBig = Template.bind({});
ListBig.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.BIG,
};
