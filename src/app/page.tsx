import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Container } from '@/components/Containet';

export default function Home() {
  function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  const projects = [
    {
      name: 'bucket',
      description: 'A web app I am building at work',
      link: {
        href: 'http://github.com',
        label: 'github.com',
      },
    },
    {
      name: 'neural networks',
      description: 'Playing around with ML models and seeing what happens',
      link: { href: 'http://github.com', label: 'github.com' },
    },
  ];

  function ToolsSection({
    children,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
      <Section {...props}>
        <ul role="list" className="space-y-16">
          {children}
        </ul>
      </Section>
    );
  }

  function Tool({
    title,
    href,
    children,
  }: {
    title?: string;
    href?: string;
    children: React.ReactNode;
  }) {
    return (
      <Card as="li">
        {title && (
          <Card.Title as="h3" href={href}>
            {title}
          </Card.Title>
        )}
        <Card.Description>{children}</Card.Description>
      </Card>
    );
  }

  return (
    <Container>
      <div className="mx-auto mb-20 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          <ToolsSection title="About">
            <Tool>
              <p>Hey, I am darwin, an ML engineer from South Africa</p>
              <p className="mt-4">
                Right now I am working in Johannesburg building a web app called
                bucket. I spend my free time diving into ML and math stuff
                because AI is pretty fascinating. Still figuring it all out, but
                that is half the fun.
              </p>
            </Tool>
          </ToolsSection>
          <ToolsSection title="projects">
            <ul role="list" className="flex flex-col gap-16">
              {projects.map((project) => (
                <Card as="li" key={project.name}>
                  <h2 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={project.link.href}>
                      {project.name}
                    </Card.Link>
                  </h2>
                  <Card.Description>{project.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                </Card>
              ))}
            </ul>
            <Link href="http://github.com">
              <div
                aria-hidden="true"
                className="tex- relative z-10 mt-16  flex items-center text-sm font-semibold text-teal-500">
                View more on GitHub
                <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
              </div>
            </Link>
          </ToolsSection>
          <ToolsSection title="Contact">
            <Tool>
              <a href="mailto:" className="font-semibold text-teal-500">
                calcifer@email.me
              </a>
            </Tool>
          </ToolsSection>
        </div>
      </div>
    </Container>
  );
}
