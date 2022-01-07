
    export const parentMenu= [

    /***************************** */  
    {
        label: 'Back', 
        link:null
            
    },
    {
        label: 'Back Info', 
        link:null,
        childMenu: [
            {
                label: 'menu.service',
                link: '/params'},
            {
                label: 'if( menu.label == "Back"',
                link: '/params'},
            {
                label: 'this.location.back();',
                link: null
            }]
            
            
    },
    
    {
        label: 'Index Nested / Lazy', 
        link:'/',
        params:{index:true}
    },
    
    {
        label: 'Nested / Lazy Loaded', 
        link:'/',
        params:{declaredSection:true}
    },
    

    {
        label: 'Material Modules', 
        link:null,
        childMenu: [
            {
                label: 'Three import techniques',
                link: '/importer'
            },
            {
                label: 'mat-icon common/ snack via constructor',
                link: '/icon-snack'
            },
        ]
    },
    {
        label: 'Routing', 
        link:null,
        childMenu: [
            {
                label: 'routerLink / slashes /wildcard',
                link: '/routing'
            },
            {
                label: 'params / subscriptions',
                link: '/params'
            },
            {
                label: 'navigate / query / outlets',
                link: '/navigate' 
            },
            {
                label: 'outlet',
                link: {outlets: {namedOutlet: 'outlet'}}
            },
            {
                label: 'fragments / scroll',
                link: '/fragments-scroll'}
                ,
            {
                label: 'ngx-scroll',
                link: '/ngx-scroll'},
                {
                    label: 'activated',
                    link: '/activated'},
                    {
                        label: 'Guards canActivate / Deactivate',
                        link: '/guards'}       
            ]
    }
 /***
    {
        label: 'Admin', 
        link:'/admin/insert/0',
    }
      /***************************** */  
  
          ];
