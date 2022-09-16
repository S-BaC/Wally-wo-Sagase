import LevelGp from './Play_levelGp';

export default function Play() {
  return (
        <div className="absolute top-20 w-full">
          <LevelGp title="Newbie" cardNum="5"/>
          <LevelGp title="Experienced" cardNum="3"/>
          <LevelGp title="Pro" cardNum="2"/>
        </div>
  );
}

