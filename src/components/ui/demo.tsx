import React from 'react';
import Timeline3D, { TimelineEvent } from '@/components/ui/3d-interactive-timeline';
import { FiAward, FiCode, FiBriefcase, FiGlobe, FiBook } from 'react-icons/fi';

const TimelineDemo: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      date: 'January 2022',
      title: 'Project Genesis',
      description: 'Initiated the groundbreaking project that would revolutionize how we interact with digital interfaces. The team assembled key talents from across the globe to create something truly unique.',
      icon: <FiCode className="text-white" />,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Development',
      link: {
        url: '#',
        text: 'View Project Details',
      },
    },
    {
      id: '2',
      date: 'March 2022',
      title: 'First Major Milestone',
      description: 'Achieved our first significant breakthrough with the core algorithm. Performance benchmarks showed a 200% improvement over existing solutions in the market.',
      icon: <FiAward className="text-white" />,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Achievement',
      color: 'emerald',
    },
    {
      id: '3',
      date: 'June 2022',
      title: 'Global Partnership',
      description: 'Formed strategic alliance with international partners to expand our reach and implement our solutions across five continents. This partnership opened doors to new markets and technological collaborations.',
      icon: <FiGlobe className="text-white" />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Partnership',
      color: 'amber',
    },
    {
      id: '4',
      date: 'October 2022',
      title: 'Product Launch',
      description: 'Successfully launched our flagship product to enthusiastic market reception. First-week downloads exceeded projections by 340%, signaling strong product-market fit.',
      icon: <FiBriefcase className="text-white" />,
      image: 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
      category: 'Product',
      color: 'rose',
      link: {
        url: '#',
        text: 'See Launch Statistics',
      },
    },
    {
      id: '5',
      date: 'February 2023',
      title: 'Research Publication',
      description: 'Published groundbreaking research paper in collaboration with leading academic institutions, detailing our novel approach and methodologies that have since been adopted as industry standards.',
      icon: <FiBook className="text-white" />,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Research',
      color: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Timeline3D 
        events={timelineEvents}
        primaryColor="bg-indigo-600"
        secondaryColor="bg-violet-500"
        accentColor="bg-emerald-500"
      />
    </div>
  );
};

export default TimelineDemo;
