(()=>{
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets=[];
  const add=(el,type='')=>{if(!el||el.classList.contains('motion-item'))return;el.classList.add('motion-item');if(type)el.classList.add(type);targets.push(el)};

  document.querySelectorAll('main section:not(.hero)').forEach(section=>{
    section.querySelectorAll(':scope > .wrap > .section-head, :scope > .wrap > .content').forEach(el=>add(el));
  });
  const groupSelectors=['.grid','.project-grid','[data-projects]','.pricing-grid','.process-grid','.footer-grid'];
  document.querySelectorAll(groupSelectors.join(',')).forEach(group=>{
    [...group.children].forEach((el,index)=>{add(el,'motion-scale');el.style.setProperty('--motion-delay',`${Math.min(index%5,4)*80}ms`)});
  });
  document.querySelectorAll('.quote,.cta,.timeline-item,.case-screen,.form-card').forEach((el,index)=>{add(el,index%2?'motion-left':'')});
  document.querySelectorAll('.timeline-item').forEach((el,index)=>el.style.setProperty('--motion-delay',`${Math.min(index,4)*70}ms`));
  document.querySelectorAll('.system-visual').forEach(el=>el.classList.add('systems-sequence'));

  document.documentElement.classList.add('motion-ready');
  if(reduce){targets.forEach(el=>el.classList.add('is-visible'));document.querySelectorAll('.systems-sequence').forEach(el=>el.classList.add('is-visible'));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');observer.unobserve(entry.target)}),{threshold:.1,rootMargin:'0px 0px -5%'});
  targets.forEach(el=>observer.observe(el));
  document.querySelectorAll('.systems-sequence').forEach(el=>observer.observe(el));
})();
