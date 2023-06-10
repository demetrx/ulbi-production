import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './AboutPage.module.scss';

const thingsILearned = [
    {
        point: 'Bundler configuration (Webpack/Vite)',
        details: [
            'React-TS build',
            'config decomposition',
            'css-modules',
            'hot-module-replacement',
            'svg loaders',
            'babel',
            'bundle size',
            'circular dependencies',
        ],
    },
    {
        point: 'Architecture',
        details: [
            'Feature-sliced design',
            'module encapsulation',
            'public API for modules',
        ],
    },
    {
        point: 'Advanced Redux',
        details: ['async thunks', 'RTK-query', 'dynamic lazy reducers'],
    },
    {
        point: 'Optimization',
        details: [
            'memoization(memo, useMemo, useCallback)',
            'bundle size(lazy components, lazy reducers, dynamic imports of libs)',
        ],
    },
    {
        point: 'Testing',
        details: [
            'unit tests (jest)',
            'integration tests (react-testing-library)',
            'e2e tests (cypress)',
            'screenshot testing (loki)',
        ],
    },
    {
        point: 'Linting & Code Formatting & Pre-commit hooks',
        details: ['eslint', 'stylelint', 'prettier', 'husky'],
    },
    {
        point: 'Abstract Syntax Tree (AST)',
        details: [
            'custom eslint plugin for architecture validation',
            'own project scripts',
        ],
    },
    {
        point: 'Feature flags',
        details: [
            'enabling features for specific users',
            'hiding experimental features (Trunk Based Development)',
            '2 app designs living simultaneously',
        ],
    },
    {
        point: 'Deployment to remote server',
        details: [
            'setting up cloud server',
            'ssh',
            'nginx configuration for static files',
            'gzip',
            'ssl certificates',
        ],
    },
    {
        point: 'CI',
        details: ['github actions'],
    },
    {
        point: 'Storybook',
        details: ['building project-specific design system', 'own UI kit'],
    },
    {
        point: 'i18n',
        details: [
            'react-i18next',
            'English language support',
            'Ukrainian language support',
        ],
    },
    {
        point: 'Accessibility',
        details: ['headless UI Components', 'semantic html'],
    },
];

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <Text
                size="l"
                align="center"
                title={t(
                    'Things I became better at when working on the project',
                )}
            />

            <ol className={cls.list}>
                {thingsILearned.map(({ point, details }, idx) => (
                    <li key={point}>
                        <Text title={`${idx + 1}. ${point}:`} />
                        {details && (
                            <ul className={cls.detailsList}>
                                {details.map((detail) => (
                                    <li className={cls.detail} key={detail}>
                                        - <Text text={detail} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </Page>
    );
};

export default AboutPage;
