import React from 'react';

type ModuleTopic = {
  title: string;
};

type ModuleItemProps = {
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: ModuleTopic[];
};

const ModuleItem = ({ title, duration, difficulty, topics }: ModuleItemProps) => {
  const getBadgeClass = () => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success';
      case 'Intermediate':
        return 'bg-warning';
      case 'Advanced':
        return 'bg-danger';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="module-item mb-30">
      <div className="module-header p-3 d-flex align-items-center justify-content-between p-20">
        <div className="d-flex align-items-center">
          <span className="module-icon me-3">
            <i className="fa-solid fa-book"></i>
          </span>
          <div>
            <h5 className="module-title mb-0">{title}</h5>
            <span className="module-duration text-muted">{duration}</span>
          </div>
        </div>
        <span className={`badge ${getBadgeClass()}`}>{difficulty}</span>
      </div>
      <div className="module-topics ps-4 pe-4 pb-3">
        {topics.map((topic, index) => (
          <div key={index} className="topic-item d-flex align-items-center mb-15">
            <i className="fa-regular fa-circle-check me-2 text-success"></i>
            <span>{topic.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleItem;
