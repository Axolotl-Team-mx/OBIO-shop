from base.views.domicile_views import getDomiciles
from base.views import brand_views as views
from django.urls import path

urlpatterns = [
    path('createdomicile/', views.createDomicile, name='create-Domicile'),
    path('getdomiciles/', views.getDomiciles, name='get-Domiciles'),
    path('getdomicile/<str:pk>/', views.getDomicile, name='get-Domicile'),
    path('updatedomicile/<str:pk>/', views.updateDomicile, name='update-Domicile'),
    path('deletedomicile/<str:pk>/', views.deleteDomicile, name='delete-Domicile'),
]