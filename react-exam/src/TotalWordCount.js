import React, { useMemo } from 'react';

function TotalWordCount({ blogs }) {
    const totalWordCount = useMemo(() => {
        return blogs.reduce((sum, blog) => sum + blog.content.split(' ').length, 0);
    }, [blogs]);

    return <p>Total word count: {totalWordCount}</p>
}

export default TotalWordCount;
