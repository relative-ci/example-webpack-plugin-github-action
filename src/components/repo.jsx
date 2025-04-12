import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import { formatRelative } from 'date-fns';

import { Icon } from '../ui/icon';

const { Title, Paragraph } = Typography;

function DefaultTitle({ owner, repo }) {
  return (
    <Title level={5}>
      <Link to={`/repos/${owner}/${repo}/`}>
        {repo}
      </Link>
    </Title>
  );
}

export function Repo({ repo, title: TitleComponent = DefaultTitle }) {
  return (
    <article>
      {TitleComponent && (
      <TitleComponent owner={repo.owner.login} repo={repo.name} />
      )}
      <Paragraph>
        {repo.description}
      </Paragraph>
      <Paragraph type="secondary">
        <Row gutter={8}>
          <Col flex={0}>
            <Row gutter={4} align="middle">
              <Col flex={0}>
                <Icon glyph="calendar" />
              </Col>
              <Col flex={1}>
                Updated:
                {' '}
                {formatRelative(new Date(repo.updated_at), new Date())}
              </Col>
            </Row>
          </Col>
          <Col flex={0}>
            <Row gutter={4} align="middle">
              <Col flex={0}>
                <Icon glyph="calendar" />
              </Col>
              <Col flex={1}>
                Created:
                {' '}
                {formatRelative(new Date(repo.created_at), new Date())}
              </Col>
            </Row>
          </Col>
        </Row>
      </Paragraph>
    </article>
  );
}
