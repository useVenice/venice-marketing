import Image from 'next/image';
import Link from 'next/link';

export type GlowingButtonProps = {
  link?: any;
  color?: string;
  glowColor?: string;
  text: string;
  className?: string;
}

const defaultProps = {
  color: "venice-green",
  glowColor: "venice-green-glow"
}

export function GlowingButton(props: GlowingButtonProps) {
  props = { ...defaultProps, ...props }
  console.log(JSON.stringify(props));
  return (
    <Link href={props.link} className={props.className}>
      <button className={"bg-venice-green shadow-lg shadow-venice-green-glow flex py-2 pr-2 pl-4 border border-venice-inner-bevel rounded-lg"}>
      {/* // TODO(Rob): why doesn't this work?
        <button className={"bg-" + props.color + " shadow-lg shadow-" + props.glowColor + " flex py-2 pr-2 pl-4 border border-venice-inner-bevel rounded-lg"}> 
        */}
        <span className="mt-1 montserrat-normal-white-13px">{props.text}</span>
        <Image src='/assets/arrow-right-white.svg' alt='Right arrow' width={27} height={27} className="ml-2" />
      </button>
    </Link>
  );
}