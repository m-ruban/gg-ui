import React, { FC, ReactNode } from 'react';
import 'components/Note/note.less';

interface NoteProps {
    children: ReactNode;
}

const Note: FC<NoteProps> = ({ children }) => <div className="gg-note">{children}</div>;

export default Note;
